import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dessert Generator</h1>
      <form>
            <fieldset>
              <legend>Dessert Type</legend>
              <label for="cake"><input type="radio" name="type" id="cake" value="cake" />Cake</label>
              <label for="cupcake"><input type="radio" name="type" id="cupcake" value="cupcake" />Cupcake</label>
              <label for="cookie"><input type="radio" name="type" id="cookie" value="cookie" />Cookie</label>
              <label for="pie"><input type="radio" name="type" id="pie" value="pie" />Pie</label>
              <label for="bar"><input type="radio" name="type" id="bar" value="bar" />Bar</label>
              <label for="cheesecake"><input type="radio" name="type" id="cheesecake" value="cheesecake" />Cheesecake</label>
              <label for="custard"><input type="radio" name="type" id="custard" value="custard" />Custard</label>
              <label for="pudding"><input type="radio" name="type" id="pudding" value="pudding" />Pudding</label>
            </fieldset>
            <fieldset>
                <legend>Flavors</legend>
                <label for="vanilla"><input type="checkbox" name="flavor" id="vanilla" value="vanilla" />Vanilla</label>
                <label for="chocolate"><input type="checkbox" name="flavor" id="chocolate" value="chocolate" />Chocolate</label>
                <label for="strawberry"><input type="checkbox" name="flavor" id="strawberry" value="strawberry" />Strawberry</label>
                <label for="lemon"><input type="checkbox" name="flavor" id="lemon" value="lemon" />Lemon</label>
                <label for="pineapple"><input type="checkbox" name="flavor" id="pineapple" value="pineapple" />Pineapple</label>
                <label for="banana"><input type="checkbox" name="flavor" id="banana" value="banana" />Banana</label>
                <label for="lime"><input type="checkbox" name="flavor" id="lime" value="lime" />Lime</label>
                <label for="mango"><input type="checkbox" name="flavor" id="mango" value="mango" />Mango</label>
                {/*
                - Orange
                - Raspberry
                - Blueberry
                - Carrot
                 */}
            </fieldset>
            <fieldset>
                <legend>Ingredients</legend>
                <label for="flour"><input type="checkbox" name="ingredients" id="flour" value="flour" />Flour</label>
                <label for="sugar"><input type="checkbox" name="ingredients" id="sugar" value="sugar" />Sugar</label>
                <label for="salt"><input type="checkbox" name="ingredients" id="salt" value="salt" />Salt</label>
                <label for="butter"><input type="checkbox" name="ingredients" id="butter" value="butter" />Butter</label>
                <label for="oil"><input type="checkbox" name="ingredients" id="oil" value="oil" />Oil</label>
                <label for="eggs"><input type="checkbox" name="ingredients" id="eggs" value="eggs" />Eggs</label>
                <label for="baking-soda"><input type="checkbox" name="ingredients" id="baking-soda" value="baking-soda" />Baking soda</label>
                <label for="baking-powder"><input type="checkbox" name="ingredients" id="baking-powder" value="baking-powder" />Baking powder</label>
                <label for="milk"><input type="checkbox" name="ingredients" id="milk" value="milk" />Milk</label>
            </fieldset>
            <fieldset>
                <legend>Skill level</legend>
                <label for="beginner"><input type="radio" id="beginner" name="skill-level" value="beginner" />Beginner</label>
                <label for="intermediate"><input type="radio" id="intermediate" name="skill-level" value="intermediate" />Intermediate</label>
                <label for="advance"><input type="radio" id="advance" name="skill-level" value="advance" />Advance</label> 
            </fieldset>
            <fieldset>
                <legend>Servings</legend>
                <label for="small"><input type="radio" id="small" name="servings" value="small" />Small</label>
                <label for="medium"><input type="radio" id="medium" name="servings" value="medium" />Medium</label>
                <label for="large"><input type="radio" id="large" name="servings" value="large" />Large</label>
            </fieldset>
{/*
            <fieldset>
                <legend></legend>
            </fieldset>
            <fieldset>
                <legend>Favorite dessert type</legend>
                <label>
                    <select id="dropdown">
                        <option value="">(select one)</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                    </select>
                </label>
            </fieldset>
  */}
            <input type="submit" id="submit" value="Submit" />
        </form>
    </div>
  );
}

export default App;
