import "./App.css";
// import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes/Routes";
import { Toaster } from "react-hot-toast";
// https://laptop-utopia-server.vercel.app

function App() {
  return (
    <div className="max-w-screen-xl	mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
