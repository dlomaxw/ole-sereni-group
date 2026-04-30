export function downloadCsv(filename: string, rows: Record<string, unknown>[]) {
  const safeRows = rows.length ? rows : [{ status: 'No records available' }];
  const headers = Array.from(
    safeRows.reduce((keys, row) => {
      Object.keys(row).forEach((key) => keys.add(key));
      return keys;
    }, new Set<string>())
  );

  const escapeCell = (value: unknown) => {
    const text = value == null ? '' : String(value);
    return `"${text.replace(/"/g, '""')}"`;
  };

  const csv = [
    headers.map(escapeCell).join(','),
    ...safeRows.map((row) => headers.map((key) => escapeCell(row[key])).join(',')),
  ].join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
