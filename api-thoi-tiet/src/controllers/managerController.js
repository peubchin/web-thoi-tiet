const LocationModel = require('../models/LocationModel');

const indexController = {
  getLocations: async (req, res) => {
    try {
      const locations = await LocationModel.find().limit(100);

      res.json(
        locations.map((loc) => {
          loc = loc.toObject();
          const currentConditions = loc.weatherInfo.currentConditions;
          loc.weatherInfo = { currentConditions };
          return loc;
        })
      );
    } catch (error) {
      console.error('Error fetching locations:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};

module.exports = indexController;
