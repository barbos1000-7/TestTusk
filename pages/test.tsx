import React, {useEffect} from 'react';
import Block from "@/components/block/Block";
import {blockMounted} from "@/stores/init";

const Test = () => {
    useEffect(() => {
        blockMounted()
    }, [])
    return (
        <div>
            <Block/>
        </div>
    );
};

export default Test;