import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Button from '../button';
function Modal({ children, onClose, title,marginTitle ='mb-10', contentWidth ='max-w-md' }) {
    const {t} = useTranslation('modal');
    return (
        <Dialog open={true} onClose={onClose} className="relative z-10">
            <div className="fixed inset-0 bg-black/90 dark:bg-white/40" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className={clsx("w-fit rounded-xl bg-black text-white dark:text-black dark:bg-white py-6 px-15",contentWidth)}>
                    <DialogTitle className={clsx("text-2xl md:text-3xl text-center font-semibold",marginTitle)}>{title}</DialogTitle>
                    {children}
                    <Button
                        onClick={onClose}
                        className="ml-[80%] mt-4 px-4 py-2 bg-white text-black dark:text-white dark:bg-black rounded hover:bg-white/50 dark:hover:bg-black/50 transition-colors duration-300"
                    >
                        {t('Closebutton')}
                    </Button>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default Modal;
