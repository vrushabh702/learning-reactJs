import { Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import { NewBook } from "./NewBook";
import { Book } from "./Book";
import { BookLayout } from "./BookLayout";

export function BookRoutes(){
    return(
        <>
        <BookLayout />
        <Routes>
            <Route index element={<BookList />}></Route>
            <Route path=":id" element={<Book />}></Route>
            <Route path="new" element={<NewBook/>}></Route>
        </Routes>
        </>
    )
}