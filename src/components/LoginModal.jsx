import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import PropTypes from "prop-types";

const LoginModal = ({ isOpen, onClose, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    setErrorMessage(""); // Clear any previous error message
    if (username === "" || password === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      console.log("Response from api", response);
      setErrorMessage("");
      if (response.status === 401) {
        console.log("reachged here 401");
        setLoggedIn(false);
        setErrorMessage("Invalid username or password");
        return;
      }
      if (response.status === 500) {
        console.log("reachged here 500");
        setLoggedIn(false);
        setErrorMessage("Server error");
        return;
      }
      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setUsername("");
        setPassword("");
        setLoggedIn(true);
        onClose(); // Close the modal
      } else {
        setErrorMessage(data.message); // Display error message
      }
    } catch (err) {
      console.error("Error during login:", err);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        placement="top-center"
        onClose={onClose}
        backdrop="blur"
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <Input
                  autoFocus
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleSubmit}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};

export default LoginModal;
