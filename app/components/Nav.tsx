export default function Nav() {
    const nav = ["Играть онлайн", "Играть с компьютером", "Рейтинг", "Настойки", "Обучение"]

    return (
        <nav className="nav">
            <ul>
                <li className="brand">AliChess</li>
                {nav.map((el, index) => {
                    return (
                        <li key={index}>{el}</li>
                    )
                })}
            </ul>
            <ul>
                <li>Messages</li>
                <li>AliQQ</li>
            </ul>
        </nav>
    )
}
