#!/usr/bin/env node

/**
 * Import Analyzer - Analyzes third-party imports to identify unused dependencies
 * Helps trim unnecessary third-party usage
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const componentsDir = path.join(projectRoot, 'components');
const appDir = path.join(projectRoot, 'app');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (!file.startsWith('.') && file !== 'node_modules') {
        getAllFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Extract imports from file
function extractImports(content) {
  const imports = {
    lucide: new Set(),
    radix: new Set(),
    framer: false,
    other: new Set(),
  };
  
  // Lucide React imports
  const lucideMatch = content.match(/import\s+{([^}]+)}\s+from\s+["']lucide-react["']/g);
  if (lucideMatch) {
    lucideMatch.forEach(match => {
      const items = match.match(/{([^}]+)}/)[1];
      items.split(',').forEach(item => {
        const trimmed = item.trim();
        if (trimmed) imports.lucide.add(trimmed);
      });
    });
  }
  
  // Radix UI imports
  const radixMatch = content.match(/from\s+["']@radix-ui\/([^"']+)["']/g);
  if (radixMatch) {
    radixMatch.forEach(match => {
      const pkg = match.match(/@radix-ui\/([^"']+)/)[1];
      imports.radix.add(pkg);
    });
  }
  
  // Framer Motion
  if (content.includes('from "framer-motion"') || content.includes("from 'framer-motion'")) {
    imports.framer = true;
  }
  
  // Other notable imports
  const otherLibs = ['date-fns', 'recharts', 'react-hook-form', 'zod', 'cmdk', 'sonner'];
  otherLibs.forEach(lib => {
    if (content.includes(`from "${lib}"`) || content.includes(`from '${lib}'`)) {
      imports.other.add(lib);
    }
  });
  
  return imports;
}

// Main analysis
function analyze() {
  console.log('🔍 Analyzing third-party imports...\n');
  
  const allFiles = [
    ...getAllFiles(componentsDir),
    ...getAllFiles(appDir),
  ];
  
  const allImports = {
    lucide: new Set(),
    radix: new Set(),
    framer: false,
    other: new Set(),
  };
  
  allFiles.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const imports = extractImports(content);
      
      imports.lucide.forEach(icon => allImports.lucide.add(icon));
      imports.radix.forEach(pkg => allImports.radix.add(pkg));
      if (imports.framer) allImports.framer = true;
      imports.other.forEach(lib => allImports.other.add(lib));
    } catch (err) {
      // Skip files that can't be read
    }
  });
  
  // Read package.json to compare
  const packageJson = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
  const radixPackages = Object.keys(packageJson.dependencies)
    .filter(dep => dep.startsWith('@radix-ui/'))
    .map(dep => dep.replace('@radix-ui/', ''));
  
  console.log('📊 Import Analysis Results:\n');
  
  console.log('🎨 Lucide React Icons Used:', Array.from(allImports.lucide).sort().join(', '));
  console.log(`   Total: ${allImports.lucide.size} unique icons\n`);
  
  console.log('🧩 Radix UI Packages Used:', Array.from(allImports.radix).sort().join(', '));
  console.log(`   Total: ${allImports.radix.size} packages\n`);
  
  const unusedRadix = radixPackages.filter(pkg => !allImports.radix.has(pkg));
  if (unusedRadix.length > 0) {
    console.log('⚠️  Potentially Unused Radix Packages:', unusedRadix.join(', '));
    console.log(`   Total: ${unusedRadix.length} packages\n`);
  }
  
  console.log('🎬 Framer Motion:', allImports.framer ? '✅ Used' : '❌ Not Used');
  console.log('📚 Other Libraries:', Array.from(allImports.other).sort().join(', '));
  
  console.log('\n💡 Recommendations:');
  if (unusedRadix.length > 0) {
    console.log(`   - Consider removing unused Radix packages: ${unusedRadix.join(', ')}`);
  }
  console.log('   - Ensure all lucide-react icons are actually used in components');
  console.log('   - Check if all other libraries are necessary\n');
}

analyze();

