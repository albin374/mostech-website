const fs = require('fs');
const files = [
  'src/pages/WhatsappChatbotPage.jsx',
  'src/pages/PosMachinePage.jsx',
  'src/pages/PosCta.jsx',
  'src/pages/ErpProductPage.jsx',
  'src/pages/AccountingPage.jsx',
  'src/components/products/WhatsappChatbotCTA.jsx',
  'src/components/products/AccountingCta.jsx',
  'src/components/products/ErpProductCta.jsx',
  'src/components/products/HrmsCta.jsx',
  'src/components/products/HrmsHero.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  // Replace <a href="#demo" with <Link to="/contact"
  if (content.match(/href=[\"']\/?#demo[\"']/)) {
    if (!content.includes('react-router-dom')) {
      content = content.replace(/(import React.*?;\n)/, "$1import { Link } from 'react-router-dom';\n");
    }
    content = content.replace(/<a([^>]*)href=[\"']\/?#demo[\"']([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, inner) => {
      return `<Link${p1}to="/contact"${p2}>${inner}</Link>`;
    });
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
