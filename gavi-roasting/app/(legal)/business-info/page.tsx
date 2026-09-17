// 실제 서비스 전 법률/세무 전문가 검토 필요 — 실제 값은 사업자등록 완료 후 교체합니다.
export default function BusinessInfoPage() {
  const rows: [string, string][] = [
    ["상호", "[상호명 입력]"],
    ["대표자", "[대표자명 입력]"],
    ["사업자등록번호", "[사업자등록번호 입력]"],
    ["통신판매업신고번호", "[통신판매업신고번호 입력]"],
    ["사업장 주소", "[주소 입력]"],
    ["이메일", "[이메일 입력]"],
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-display text-2xl text-paper">사업자정보</h1>
      <table className="mt-8 w-full text-sm">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-white/10">
              <th className="py-2 pr-4 text-left font-medium text-muted">{label}</th>
              <td className="py-2 text-paper">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
