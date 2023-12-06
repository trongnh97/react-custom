import About from "pages/About";
import AuthLogin from "pages/AuthLogin";
import Home from "pages/Home";
import Login from "pages/Login";
import Post from "pages/post";
import EditPost from "pages/post/edit";

export const publicRoutes = [
    { path: "/login", component: Login },
    { path: "/auth-login", component: AuthLogin },
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/posts", component: Post },
    { path: "/posts/:id", component: EditPost },
];
