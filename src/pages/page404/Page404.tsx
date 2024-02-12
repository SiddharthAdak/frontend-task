import { Link } from 'react-router-dom';
function Page404() {
    return (
        <div className = " fixed bg-slate-300 w-screen h-screen flex text-center left-0 top-0 z-10 overflow-hidden items-center justify-center py-5 px-7">
            <div className = "px-2.5 py-12 text-center rounded-xl bg-white w-[600px]">
            <div>
                
                <h3 className = " text-purple my-4">404</h3>
                <h1 className = "my-5 text-4xl font-bold">Page not found</h1>
                <p className = "my-5">Sorry, we couldn't find the page you were looking for.</p>
                <div className = "my-4">
                    <Link className = " cursor-pointer px-3 py-2.5 text-white bg-violet-600 rounded-lg mx-1" to = "/">Go back home</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Page404;