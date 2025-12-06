#!/usr/bin/env node

/**
 * GA4 Implementation Test Script
 * 
 * This script tests the GA4 configuration and verifies all components are set up correctly.
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Testing GA4 Implementation...\n');

const errors = [];
const warnings = [];
const successes = [];

// 1. Check if .env.local exists
const envLocalPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envLocalPath)) {
  successes.push('✅ .env.local file exists');
  
  const envContent = fs.readFileSync(envLocalPath, 'utf8');
  if (envContent.includes('NEXT_PUBLIC_GA4_MEASUREMENT_ID')) {
    const match = envContent.match(/NEXT_PUBLIC_GA4_MEASUREMENT_ID=(.+)/);
    if (match && match[1] && match[1].trim() !== '') {
      const id = match[1].trim();
      if (id.startsWith('G-')) {
        successes.push(`✅ GA4 Measurement ID found: ${id}`);
      } else {
        warnings.push(`⚠️  GA4 Measurement ID format might be incorrect: ${id} (should start with G-)`);
      }
    } else {
      errors.push('❌ NEXT_PUBLIC_GA4_MEASUREMENT_ID is empty');
    }
  } else {
    errors.push('❌ NEXT_PUBLIC_GA4_MEASUREMENT_ID not found in .env.local');
  }
  
  if (envContent.includes('NEXT_PUBLIC_GA4_DEBUG=true')) {
    successes.push('✅ Debug mode is enabled');
  } else {
    warnings.push('⚠️  Debug mode not enabled (set NEXT_PUBLIC_GA4_DEBUG=true for testing)');
  }
} else {
  errors.push('❌ .env.local file not found');
  warnings.push('💡 Create .env.local with NEXT_PUBLIC_GA4_MEASUREMENT_ID and NEXT_PUBLIC_GA4_DEBUG=true');
}

// 2. Check if required files exist
const requiredFiles = [
  'lib/analytics/ga4-config.ts',
  'lib/analytics/ga4-events.ts',
  'lib/analytics/ga4-tracker.ts',
  'lib/analytics/index.ts',
  'components/analytics/ga4-provider.tsx',
  'components/analytics/page-view-tracker.tsx',
  'components/analytics/index.ts',
  'hooks/use-ga4-tracking.ts',
];

requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    successes.push(`✅ ${file} exists`);
  } else {
    errors.push(`❌ ${file} is missing`);
  }
});

// 3. Check if app/layout.tsx includes GA4Provider
const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf8');
  if (layoutContent.includes('GA4Provider')) {
    successes.push('✅ GA4Provider is integrated in app/layout.tsx');
  } else {
    errors.push('❌ GA4Provider not found in app/layout.tsx');
  }
  
  if (layoutContent.includes('PageViewTracker')) {
    successes.push('✅ PageViewTracker is integrated in app/layout.tsx');
  } else {
    errors.push('❌ PageViewTracker not found in app/layout.tsx');
  }
} else {
  errors.push('❌ app/layout.tsx not found');
}

// 4. Check if package.json includes @next/third-parties
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  if (packageJson.dependencies && packageJson.dependencies['@next/third-parties']) {
    successes.push(`✅ @next/third-parties is installed (v${packageJson.dependencies['@next/third-parties']})`);
  } else {
    errors.push('❌ @next/third-parties not found in package.json dependencies');
  }
} else {
  errors.push('❌ package.json not found');
}

// Print results
console.log('📋 Test Results:\n');

if (successes.length > 0) {
  console.log('✅ Successes:');
  successes.forEach(msg => console.log(`   ${msg}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  Warnings:');
  warnings.forEach(msg => console.log(`   ${msg}`));
  console.log('');
}

if (errors.length > 0) {
  console.log('❌ Errors:');
  errors.forEach(msg => console.log(`   ${msg}`));
  console.log('');
  process.exit(1);
} else {
  console.log('🎉 All checks passed! GA4 implementation looks good.\n');
  console.log('📝 Next steps:');
  console.log('   1. Start dev server: pnpm dev');
  console.log('   2. Open browser console (F12)');
  console.log('   3. Look for [GA4 Debug] messages');
  console.log('   4. Check Network tab for google-analytics.com requests');
  console.log('   5. Visit Google Analytics DebugView to see real-time events\n');
  process.exit(0);
}

