import react from "react";
import { Route } from "react-router-dom";

//layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    
    return (
    //fragments <> it is work as imagnary parent element because in react everything is enclosed under angular brackets
        <>
            <Route 
                {...rest}
            component={(props) => ( 
                <DefaultLayout>
                    <Component{...props} />
                </DefaultLayout>
            )}
            />

        </>
    );
};

export default DefaultHOC;