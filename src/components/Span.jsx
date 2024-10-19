

export const Span = ({ error }) => {
    if (!error) return null; 
    return (
        <span className="error-message">
            {error}
        </span>
    );
};

