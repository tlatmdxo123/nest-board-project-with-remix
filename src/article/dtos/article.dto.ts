export class ArticleDto {
  id: number;
  title: string; //제목
  content: string; //본문
  hashTag: string; //해시태그

  createdAt: Date; //생성일시
  createdBy: string; //생성자
  modifiedAt: Date; //수정일시
  modifiedBy: string; //수정자
}
