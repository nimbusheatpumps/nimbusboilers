const fs = require('fs');
const path = require('path');

const auditPath = path.join(__dirname, '../lighthouse-final-audit.json');

try {
  const rawData = fs.readFileSync(auditPath, 'utf8');
  const data = JSON.parse(rawData);

  const seoCategory = data.categories?.seo;
  if (!seoCategory) {
    console.error('SEO category not found in the audit report.');
    process.exit(1);
  }

  const seoScore = Math.round(seoCategory.score * 100);

  console.log(`SEO Score: ${seoScore}/100`);

  if (seoScore >= 90) {
    console.log('SEO score is above or equal to 90. Excellent!');
  } else {
    console.log('SEO score is below 90. Key failing SEO audits:');
    if (seoCategory.auditRefs) {
      seoCategory.auditRefs.forEach(ref => {
        const audit = data.audits[ref.id];
        if (audit && (audit.score === 0 || audit.score === null || audit.score < 0.9)) {
          const displayValue = audit.displayValue || audit.errorMessage || 'Failed';
          console.log(`- ${ref.id}: ${displayValue}`);
        }
      });
    }
  }
} catch (error) {
  console.error('Error reading or parsing the audit file:', error.message);
  process.exit(1);
}