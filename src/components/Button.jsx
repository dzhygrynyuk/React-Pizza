import classNames from "classnames";

function Button({children, className, outline}){
    return(
        <button
            className={classNames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    );
}

export default Button;