function PageHeader({ title, meta }) {
    return (
        <header className="App__subheader">
            <div className="App__subheader__content">
                <h1 className="App__subheader__heading">{title}</h1>
                <div>{meta}</div>
            </div>
        </header>
    );
}

export default PageHeader;
