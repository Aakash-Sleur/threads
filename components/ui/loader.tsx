'use client'

import { Oval } from "react-loader-spinner"

export const Loader = () => (

    <Oval
        height={80}
        width={80}
        color="#2045ca"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#2045ca"
        strokeWidth={2}
        strokeWidthSecondary={2}

    />
)
