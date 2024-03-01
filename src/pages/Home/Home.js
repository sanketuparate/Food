import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

function Home (){
    return(
        <>
        <Layout>
            {/*Home section hero banner*/}
            <Section1 />
            {/* Home About section */}
            <Section2 />
            {/* Home section Menu */}
            <Section3 />
            {/* Home Section promotion */}
            <Section4 />
            {/* Home section shop */}
            <Section5 />
            {/* Home Section Blog */}
            <Section6 />
            {/* Home Section Contact */}
            <Section7 />
        </Layout>
        </>
        
    );
}

export default Home;