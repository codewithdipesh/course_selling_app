const pdfButton = document.getElementById('downloadPdfBtn');
const pdfMessage = document.getElementById('pdfMessage');

function buildSimplePdf(text) {
  const content = `BT /F1 18 Tf 72 720 Td (${text}) Tj ET`;
  const stream = `<< /Length ${content.length} >>\nstream\n${content}\nendstream`;

  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
    '2 0 obj\n<< /Type /Pages /Count 1 /Kids [3 0 R] >>\nendobj',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj',
    '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj',
    `5 0 obj\n${stream}\nendobj`
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  objects.forEach((obj) => {
    offsets.push(pdf.length);
    pdf += `${obj}\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';

  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return new Blob([pdf], { type: 'application/pdf' });
}

pdfButton.addEventListener('click', () => {
  try {
    const blob = buildSimplePdf('Sample CourseFlow Dashboard Report');
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'courseflow-sample-report.pdf';
    a.click();
    URL.revokeObjectURL(url);
    pdfMessage.textContent = 'PDF downloaded successfully.';
  } catch (error) {
    pdfMessage.textContent = 'Unable to generate PDF right now. Please try again.';
  }
});
