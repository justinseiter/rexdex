import PropTypes from "prop-types";

function Pagination({ page, totalPages, handlePagingClick, loading }) {
    const shouldDisable = (variant) => {
        if ((page === 1 && variant === "back") || loading) {
            return true;
        }
        if ((page === totalPages && variant === "forward") || loading) {
            return true;
        }
    };

    return (
        <div className="Pagination">
            <button
                disabled={shouldDisable("back")}
                onClick={() => handlePagingClick(1)}
                className="Pagination__button"
            >
                <span aria-hidden="true">&laquo;</span>
                <span className="u-sr-only">First page</span>
            </button>
            <button
                disabled={shouldDisable("back")}
                onClick={() => handlePagingClick(page - 1)}
                className="Pagination__button"
            >
                <span aria-hidden="true">&lsaquo;</span>
                <span className="u-sr-only">Previous page</span>
            </button>
            <span className="Pagination__meta">
                <b>{page}</b> of <b>{totalPages}</b>
            </span>
            <button
                disabled={shouldDisable("forward")}
                onClick={() => handlePagingClick(page + 1)}
                className="Pagination__button"
            >
                <span aria-hidden="true">&rsaquo;</span>
                <span className="u-sr-only">Next page</span>
            </button>
            <button
                disabled={shouldDisable("forward")}
                onClick={() => handlePagingClick(totalPages)}
                className="Pagination__button"
            >
                <span aria-hidden="true">&raquo;</span>
                <span className="u-sr-only">Last page</span>
            </button>
        </div>
    );
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePagingClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Pagination;
