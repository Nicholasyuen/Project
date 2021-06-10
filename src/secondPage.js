import React, { useState } from "react";
import services from "./services.json";
import plans from "./plans.json";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const SecondPage = ({ setPage }) => {
  const [gen, setGen] = useState(false);
  const [spe, setSpe] = useState(false);
  const [phy, setPhy] = useState(false);
  const [name, setName] = useState(undefined);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    if (name && name !== '') {
      let totalPrice = 0;
      let newKey = Object.keys(plans).length;
      if (gen) {
        totalPrice = totalPrice + services.gen.price;
      }
      if (spe) {
        totalPrice = totalPrice + services.spec.price;
      }
      if (phy) {
        totalPrice = totalPrice + services.phys.price;
      }
      let newPlan = {
        name: name,
        totalPrice: totalPrice,
        gen: gen,
        spe: spe,
        phy: phy,
        key: newKey,
      };
      //show you the result of add new plan
      console.log("plan", plans);
      plans[name] = newPlan;
    }
    setPage(2);
  };

  return (
    <div>
      <Typography variant="h4">Create a plan</Typography>
      <Grid xs style={{ padding: 10 }} item>
        <TextField
          id="standard-multiline-flexible"
          label="Name"
          multiline
          rowsMax={4}
          onChange={handleChange}
        />
      </Grid>
      <Grid xs style={{ padding: 10 }} item>
        <FormControl component="fieldset">
          <FormLabel component="legend">Service</FormLabel>
          <FormGroup>
            <FormControlLabel
              value={gen}
              control={
                <Checkbox
                  checked={gen}
                  onChange={() => setGen(!gen)}
                  name="gen"
                />
              }
              label="General"
            />
            <FormControlLabel
              value="Specialist"
              control={
                <Checkbox
                  checked={spe}
                  onChange={() => setSpe(!spe)}
                  name="spe"
                />
              }
              label="Specialist"
            />
            <FormControlLabel
              value="Physiotherapy"
              control={
                <Checkbox
                  checked={phy}
                  onChange={() => setPhy(!phy)}
                  name="phy"
                />
              }
              label="Physiotherapy"
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </div>
  );
};

export default SecondPage;
