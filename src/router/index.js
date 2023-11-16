import { Suspense } from "react";
import {
  Routes,
  HashRouter, Route, useNavigate, useLocation, useParams, useSearchParams
} from 'react-router-dom'
import routes from "./routes";

import {
  Mask, DotLoading
} from 'antd-mobile';

const Element = function Element(props) {


  const { title = '知乎日报-WebApp' } = props.meta || {}

  document.title = title

  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  return (
    <Suspense fallback={<Mask visible={true} opacity="thick">
      <DotLoading></DotLoading>
    </Mask>}>
      <props.component location={location} params={params} usp={usp} navigate={navigate} {...props.route.props} />
    </Suspense>
  );
}
export default function RouterView() {
  return (

      <Routes>
        {
          routes.map((route, index) => {
            return <Route key={index} path={route.path} element={<Element component={route.component} route={route} />}></Route>
          })
        }
      </Routes>


  )
}