import { Button,Spinner } from "keep-react";

const ButtonSpinner = () => {
  return (
    <>
      <Button type="primary" size="md">
        <span className="pr-2">
          <Spinner color="success" size="md" />
        </span>
        Loading...
      </Button>
      <Button type="outlinePrimary" size="md">
        <span className="pr-2">
          <Spinner color="success" size="md" />
        </span>
        Loading...
      </Button>
    </>
  )
}

export default ButtonSpinner