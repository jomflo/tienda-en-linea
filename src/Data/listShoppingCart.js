
import { listArticles } from "./listArticles";
export const listShoppingCart = listArticles.filter((article)=> article.id===15 || article.id===20);
