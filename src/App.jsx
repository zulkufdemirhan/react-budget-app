import Container from "react-bootstrap/Container"
import { Button, Stack } from "react-bootstrap"

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="outline-primary">Add Expense</Button>
        <Button variant="primary">Add Budget</Button>
      </Stack>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "flex-start" }}></div>
    </Container>
  )
}

export default App
