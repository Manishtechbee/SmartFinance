router.get("/summary", authMiddleware, async (req, res) => {
  res.json({
    message: "Dashboard Data",
    user: req.user.id
  });
});
