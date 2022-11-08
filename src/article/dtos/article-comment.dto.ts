export class ArticleCommentDto {
  id: number;
  articleId: number; //게시글 id
  content: string; //댓글 본문

  createdAt: Date; //생성일시
  createdBy: string; //생성자
  modifiedAt: Date; //수정일시
  modifiedBy: string; //수정자
}
