import React from "react";
import { Spinner } from "reactstrap";

const withLoading = (Component) => {
    class HOC extends React.Component {
        render() {
            if (this.props.loading) {
                return (
                    <div><Spinner /> Loading...</div>
                )
            }

            return <Component {...this.props} />
        }
    }

    return HOC
}

export default withLoading