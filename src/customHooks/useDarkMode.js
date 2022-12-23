import { useEffect , useState } from "react";


export const useDarkMode = () => {
  //creamos variable de estado del tema
  const [theme, setTheme] = useState("light");
  //La siguiente variable verifica si el componente esta montado o no
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode); //guardo el tema en el LS
    setTheme(mode); //cambio la variable de estado
  }

  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
  }, []);
  
  return [theme, toggleTheme, mountedComponent];
}