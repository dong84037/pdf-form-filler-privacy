// 실제 서비스 전 법률/세무 전문가 검토 필요 — 정보통신망법 제50조의2 기반 표준 문구를 사용한 placeholder입니다.
import { LegalPageHeader } from "@/components/ui/LegalContent";

export default function EmailCollectionPolicyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <LegalPageHeader title="이메일무단수집거부" lastUpdated="[작성 예정]" />

      <p className="mt-6 text-sm leading-relaxed text-muted">
        본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를
        이용하여 무단으로 수집되는 것을 거부하며, 이를 위반 시 「정보통신망 이용촉진 및
        정보보호 등에 관한 법률」에 의해 형사처벌됨을 유념하시기 바랍니다.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted">게시일자: [작성 예정]</p>
    </div>
  );
}
