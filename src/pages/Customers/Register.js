import { useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(2)
  }
}))

const Register = () => {
  const classes = useStyles()

  const [form, setForm] = useState({
    name: {
      value: '',
      error: false
    },
    job: {
      value: '',
      error: false
    }
  })

  const handleInputChange = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: {
        value
      }
    })
  }

  const handleRegisterButton = () => {
    let hasError = false
    let newFormState = {
      ...form
    }

    if (!form.name.value) {
      hasError = true

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Digite o campo nome corretamente!'
      }
    }

    if (!form.job.value) {
      hasError = true

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Digite o campo cargo corretamente!'
      }
    }

    if (hasError) {
      return setForm(newFormState)
    }

    axios
      .post('https://reqres.in/api/users', {
        name: form.name.value,
        job: form.job.value
      })
      .then(response => {
        console.log('ok', response)
      })
  }

  return (
    <>
      <div className={classes.wrapper}>
        <TextField
          error={form.name.error}
          helperText={form.name.error ? form.name.helperText : ''}
          label="Digite o seu nome"
          name="name"
          variant="outlined"
          value={form.name.value}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.wrapper}>
        <TextField
          error={form.job.error}
          helperText={form.job.error ? form.job.helperText : ''}
          label="Digite o seu cargo"
          name="job"
          variant="outlined"
          value={form.job.value}
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegisterButton}
        >
          Cadastrar
        </Button>
      </div>
    </>
  )
}

export default Register
