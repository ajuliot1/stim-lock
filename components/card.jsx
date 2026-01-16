export function Card({ title, children, className }) {
    return (
        <div className={['bg-white rounded-sm text-neutral-600', className].filter(Boolean).join(' ')}>
            <div className="flex flex-col gap-4 px-6 py-8">
                {title && <h1 className="form-title">{title}</h1>}
                {children}
            </div>
        </div>
    );
}
