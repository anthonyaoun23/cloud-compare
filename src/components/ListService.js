import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    maxWidth: 400
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = [
  "AI and Machine Learning",
  "Data warehouse",
  "Big data processing",
  "Data orchestration / ETL",
  "Analytics and visualization",
  "Virtual servers",
  "Containers and container orchestrators",
  "Database",
  "DevOps and application monitoring",
  "Management"
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export function ListSelection(props) {
  const classes = useStyles();
  const { list, listError, updateList } = props;

  let personName = [];
  Object.keys(list).map(item => {
    if (list[item]) {
      personName.push(item);
    }
  });

  // let selectedChip = Object.keys(list).map(item => {
  //   if (list[item]) {
  //     console.log(item);
  //     value.push(item);
  //     return <Chip key={item} label={item} className={classes.chip} />;
  //   }
  // });

  function handleChange(event) {
    updateList(event.target.value);
  }

  // console.log(selectedChip);

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">Services</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => {
                console.log(selected);

                return (
                  <Chip key={value} label={value} className={classes.chip} />
                );
              })}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {Object.keys(list).map(item => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

export function ListSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState(props.list);

  function handleChange(event) {
    setPersonName(event.target.value);
  }

  function handleChangeMultiple(event) {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  }

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">Services</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default function ListService() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  function handleChange(event) {
    setPersonName(event.target.value);
  }

  function handleChangeMultiple(event) {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  }

  return (
    <div className={classes.root}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">Services</InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export function ListServices(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { list, listError } = props;

  const value = [];
  Object.keys(list).map(item => {
    if (list[item]) {
      value.push(item);
    }
  });

  const [personName, setPersonName] = React.useState(value);

  function handleChange(event) {
    console.log("HERE", event.target.value);
    const { updateList } = props;
    setPersonName(event.target.value);
    updateList(event.target.value);
  }

  function handleChangeMultiple(event) {
    const { list, updateList } = props;

    const value = [];

    Object.keys(list).map(item => {
      if (list[item]) {
        value.push();
      }
    });
    setPersonName(value);
    updateList(event.target.value);
  }

  return (
    <div className={classes.root}>
      <FormControl error={listError} className={classes.formControl}>
        <InputLabel htmlFor="select-multiple-chip">
          {listError ? "Please select service(s)" : "Services"}
        </InputLabel>
        <Select
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
