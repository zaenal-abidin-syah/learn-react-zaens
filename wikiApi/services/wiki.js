import axios from "axios"

export const Get = async () => {
  const result = await axios.get('https://test.wikipedia.org/w/api.php').
    then(res => res.json())
  console.log(result)
}

