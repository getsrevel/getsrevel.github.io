using System;

namespace temperature_assessment
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Temperatur vurdering");

      InputHandler inputHandler = new InputHandler();
      TemperatureAssessor temperatureAssessor = new TemperatureAssessor();

      do
      {
        double temperature = inputHandler.PromptForNumber("Hvad er temperaturen i grader celsius?");
        string result = temperatureAssessor.EvaluateTemperature(temperature);
        Console.WriteLine(result);
      } while (inputHandler.Confirm("Vil du prøve igen?"));
    }
  }

  class TemperatureAssessor
  {
    public string EvaluateTemperature(double temperature)
    {
      if (temperature <= 10) return "For koldt til at stå op - bliv i sengen";
      if (temperature <= 15) return "For koldt til at arbejde - bliv hjemme";
      if (temperature <= 20) return "OK temperatur til en tur i skoven";
      if (temperature <= 22) return "Perfekt pausetemperatur";
      return "For varmt til at arbejde - tag til stranden";
    }
  }

  class InputHandler
  {
    public double PromptForNumber(string message)
    {
      double value;
      bool isSuccess;
      do
      {
        string line = Prompt($"{message} ");
        isSuccess = Double.TryParse(line, out value);
        if (!isSuccess)
        {
          Console.Error.WriteLine("Ugyldigt input: Du skal skrive et tal.");
        }
      } while (!isSuccess);

      return value;
    }

    public bool Confirm(string question)
    {
      string confirm = "ja";
      string reject = "nej";
      string response;
      bool isValidResponse;
      do
      {
        response = Prompt($"{question} [{confirm}/{reject}] ");
        isValidResponse = response.Equals(reject) || response.Equals(confirm);
        if (!isValidResponse)
        {
          Console.Error.WriteLine($"Ugyldigt input: Du skal svare enten '{confirm}' eller '{reject}'");
        }
      } while (!isValidResponse);

      return response.Equals(confirm);
    }

    string Prompt(string message)
    {
      Console.Write($"{message} ");
      return Console.ReadLine();
    }
  }
}
