import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Button({ href, to, onClick, children, className = '', ...pre }) {
    let Comp = 'button';
    const prop = { onClick, ...pre };
    if (href) {
        Comp = 'a';
        prop.href = href;
    } else if (to) {
        Comp = Link;
        prop.to = to;
    }
    return (
        <Comp className={clsx('cursor-pointer',className)} {...prop}>
            {children}
        </Comp>
    );
}

export default Button;
