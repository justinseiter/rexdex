import PropTypes from "prop-types";

function Pagination({ page, totalPages, handlePageClick, loading }) {
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
                onClick={() => handlePageClick(1)}
            >
                First
            </button>
            <button
                disabled={shouldDisable("back")}
                onClick={() => handlePageClick(page - 1)}
            >
                Previous
            </button>
            <span>
                <b>{page}</b> of <b>{totalPages}</b>
            </span>
            <button
                disabled={shouldDisable("forward")}
                onClick={() => handlePageClick(page + 1)}
            >
                Next
            </button>
            <button
                disabled={shouldDisable("forward")}
                onClick={() => handlePageClick(totalPages)}
            >
                Last
            </button>
        </div>
    );
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Pagination;
