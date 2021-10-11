using System;

namespace temperature_assessment
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Temperatur vurdering");
      do
      {
        double temperature = PromptForNumber("Hvad er temperaturen i grader celsius?");
        string result = EvaluateTemperature(temperature);
        Console.WriteLine(result);
      } while (Confirm("Vil du prøve igen?"));
    }

    static public string EvaluateTemperature(double temperature)
    {
      if (temperature <= 10) return "For koldt til at stå op - bliv i sengen";
      if (temperature <= 15) return "For koldt til at arbejde - bliv hjemme";
      if (temperature <= 20) return "OK temperatur til en tur i skoven";
      if (temperature <= 22) return "Perfekt pausetemperatur";
      return "For varmt til at arbejde - tag til stranden";
    }

    static double PromptForNumber(string message)
    {
      double value;
      bool isSuccess;
      do
      {
        Console.Write($"{message} ");
        string line = Console.ReadLine();
        isSuccess = Double.TryParse(line, out value);
        if (!isSuccess)
        {
          Console.Error.WriteLine("Ugyldigt input: Du skal skrive et tal.");
        }
      } while (!isSuccess);

      return value;
    }

    static bool Confirm(string question)
    {
      string confirm = "ja";
      string reject = "nej";
      string response;
      bool isValidResponse;
      do
      {
        Console.Write($"{question} [{confirm}/{reject}] ");
        response = Console.ReadLine();
        isValidResponse = response.Equals(reject) || response.Equals(confirm);
        if (!isValidResponse)
        {
          Console.Error.WriteLine($"Ugyldigt input: Du skal svare enten '{confirm}' eller '{reject}'");
        }
      } while (!isValidResponse);

      return response.Equals(confirm);
    }

    static string Prompt(string message)
    {
      Console.Write($"{message} ");
      return Console.ReadLine();
    }

  }
}
