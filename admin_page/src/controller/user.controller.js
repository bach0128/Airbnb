module.exports = {
  index: async (req, res) => {
    await res.json({ params: req.params });
  },
};
