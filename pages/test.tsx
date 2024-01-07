import React, {useEffect} from 'react';
import Block from "@/components/TEST/block/Block";
import {menuMounted} from "@/stores/layout/menu/content/init";

const Test = () => {
    useEffect(()=> {
        menuMounted()
    }, [])
    return (
        <div>
            <Block />
        </div>
    );
};

export default Test;