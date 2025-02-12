import { Router } from "express";
const subscreptionRouter = Router();

subscreptionRouter.get("/", (req, res) => {
  res.send({
    title: "GET all subscreptions",
  });
});
subscreptionRouter.get("/:id", (req, res) => {
  res.send({
    title: "GET subscreption details",
  });
});
subscreptionRouter.post("/", (req, res) => {
  res.send({
    title: "CREATE subscreption",
  });
});
subscreptionRouter.put("/:id", (req, res) => {
  res.send({
    title: "UPDATE subscreption details",
  });
});
subscreptionRouter.delete("/:id", (req, res) => {
  res.send({
    title: "DELETE subscreption",
  });
});
subscreptionRouter.get("/users/:id", (req, res) => {
    res.send({
        title: "GET all user subscreptions "
    })
});
subscreptionRouter.put("/:id/cancel", (req, res) => {
    res.send({
        title: "CANCEL subscreption"            
    })
})
subscreptionRouter.get("/upcoming-renewals", (req, res) => {
    res.send({
        title: "GET upcoming renewals"
    })
})

export default subscreptionRouter;