import { Accessor, createSignal, JSXElement, ParentComponent, Setter } from 'solid-js';
import styles from './modal.module.scss';
import close from '../../assets/svg/icon-close.svg';

interface IProps {
    children?: JSXElement;
    signal: {
        isModalOpen: Accessor<boolean>,
        setIsModalOpen: Setter<boolean>
    }
}

export const Modal: ParentComponent<IProps> = ({children, signal}) => {

    const handleClose = () => {
        signal.setIsModalOpen(!signal.isModalOpen())
    }

    return (
        <>
        {
            signal.isModalOpen() &&
            <div class={styles.modal}>
                <div class={styles.container}>
                    <div class={styles.content}>
                        {children}
                        <button onClick={handleClose} class={styles.close}>
                            <img src={close} alt="Close Modal" />
                        </button>
                    </div>
                </div>
            </div>
        }
        </>
    );
};
