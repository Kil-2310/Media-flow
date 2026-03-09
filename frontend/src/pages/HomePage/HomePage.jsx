import React from 'react'
import Header from "@/shared/ui/Header"
import Footer from "@/shared/ui/Footer"
import DescriptionRegion from "@/features/description_region"

const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <DescriptionRegion />
            </main>
            <Footer />
        </>
    )
}

export default HomePage