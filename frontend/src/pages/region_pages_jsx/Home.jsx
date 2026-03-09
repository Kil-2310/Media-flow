import Header from "@/shared/ui/Header"
import Footer from "@/shared/ui/Footer"
import DescriptionRegion from "@/shared/ui/DescriptionRegion"
import React from 'react'
import ReactDOM from 'react-dom/client'

const Home = () => {
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
)