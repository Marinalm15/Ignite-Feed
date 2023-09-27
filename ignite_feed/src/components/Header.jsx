import styles from "./Header.module.css"
import { CaretDoubleRight } from "@phosphor-icons/react";

export const Header = () => {
    return (
        <header className={styles.header}>
            <CaretDoubleRight size={45} color="#00875f"/>
            <strong>Ignite Feed</strong>
        </header>
    )
}