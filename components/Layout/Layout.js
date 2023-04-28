import HomeNav from '../Header/HomeNav'

export default function Layout({ children }) {
    return (
        <main>
            <HomeNav />
            {children}
        </main>
    )
}