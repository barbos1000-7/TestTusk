import React, {useEffect} from 'react';
import Block from "@/components/block/Block";
import {menuMounted} from "@/stores/init";

const Test = () => {
    useEffect(() => {
        menuMounted()
    }, [])
    return (
        <div>
            <Block/>
        </div>
    );
};

export default Test;