export function downloadFile(fileUrl: string, suggestedFileName?: string): void {
  const anchorElement = document.createElement('a');
  anchorElement.href = fileUrl;
  if (suggestedFileName) {
    anchorElement.download = suggestedFileName;
  }
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
}


